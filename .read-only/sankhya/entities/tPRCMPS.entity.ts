import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TprmpsEntity } from './tPRMPS.entity';

@Index('PK_TPRCMPS', ['codcmps'], { unique: true })
@Entity('TPRCMPS', { schema: 'SANKHYA' })
export class TprcmpsEntity {
  @Column('int', { primary: true, name: 'CODCMPS' })
  codcmps: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('datetime', { name: 'DHINC' })
  dhinc: Date;

  @Column('text', { name: 'CONFIG' })
  config: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tprcmps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.codcmps)
  tprmps: TprmpsEntity[];
}
