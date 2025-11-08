import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TcbhfcEntity } from './tCBHFC.entity';

@Index('PK_TCBFCT', ['codemp', 'codfatocontb'], { unique: true })
@Entity('TCBFCT', { schema: 'SANKHYA' })
export class TcbfctEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CODFATOCONTB', length: 30 })
  codfatocontb: string;

  @Column('varchar', { name: 'DESCFATCONTB', length: 60 })
  descfatcontb: string;

  @Column('char', { name: 'SITUACAO', length: 1 })
  situacao: string;

  @Column('char', {
    name: 'TIPOFATO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipofato: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbfcts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @OneToMany(() => TcbhfcEntity, (tcbhfcEntity) => tcbhfcEntity.tcbfct)
  tcbhfcs: TcbhfcEntity[];
}
