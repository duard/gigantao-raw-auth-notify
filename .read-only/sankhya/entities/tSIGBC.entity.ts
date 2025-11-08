import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TsidsbEntity } from './tSIDSB.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigbiEntity } from './tSIGBI.entity';

@Index('PK_TSIGBC', ['codgbc'], { unique: true })
@Entity('TSIGBC', { schema: 'SANKHYA' })
export class TsigbcEntity {
  @Column('int', { primary: true, name: 'CODGBC' })
  codgbc: number;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 100 })
  resourceid: string | null;

  @Column('varchar', { name: 'PERGUNTA', nullable: true, length: 200 })
  pergunta: string | null;

  @Column('int', { name: 'QTDUSO', nullable: true, default: () => '(0)' })
  qtduso: number | null;

  @ManyToOne(() => TsidsbEntity, (tsidsbEntity) => tsidsbEntity.tsigbcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUDSB', referencedColumnName: 'nudsb' }])
  nudsb: TsidsbEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsigbcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToMany(() => TsigbiEntity, (tsigbiEntity) => tsigbiEntity.tsigbcs)
  tsigbis: TsigbiEntity[];
}
