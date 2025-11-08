import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFLCR', ['codemp', 'codparcretirada'], { unique: true })
@Entity('TGFLCR', { schema: 'SANKHYA' })
export class TgflcrEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARCRETIRADA' })
  codparcretirada: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgflcr)
  tgfcabs: TgfcabEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgflcrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcrs)
  @JoinColumn([{ name: 'CODPARCRETIRADA', referencedColumnName: 'codparc' }])
  codparcretirada2: TgfparEntity;
}
