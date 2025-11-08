import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprltaEntity } from './tPRLTA.entity';
import { TprccqEntity } from './tPRCCQ.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRTAC', ['idccq', 'seqtac'], { unique: true })
@Entity('TPRTAC', { schema: 'SANKHYA' })
export class TprtacEntity {
  @Column('int', { primary: true, name: 'IDCCQ' })
  idccq: number;

  @Column('smallint', { primary: true, name: 'SEQTAC' })
  seqtac: number;

  @Column('int', { name: 'CODTIPAMOSTRA' })
  codtipamostra: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11, default: () => "' '" })
  controlepa: string;

  @Column('float', { name: 'QTDAMOSTRA', precision: 53, default: () => '(0)' })
  qtdamostra: number;

  @Column('char', { name: 'OBRIGATORIO', length: 1, default: () => "'S'" })
  obrigatorio: string;

  @OneToMany(() => TprltaEntity, (tprltaEntity) => tprltaEntity.tprtac)
  tprltas: TprltaEntity[];

  @ManyToOne(() => TprccqEntity, (tprccqEntity) => tprccqEntity.tprtacs)
  @JoinColumn([{ name: 'IDCCQ', referencedColumnName: 'idccq' }])
  idccq2: TprccqEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprtacs)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa: TgfproEntity;
}
