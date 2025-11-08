import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmiefeEntity } from './tMIEFE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TmimetEntity } from './tMIMET.entity';
import { TmirmeEntity } from './tMIRME.entity';

@Index('PK_TMIEXE', ['codexe'], { unique: true })
@Entity('TMIEXE', { schema: 'SANKHYA' })
export class TmiexeEntity {
  @Column('int', { primary: true, name: 'CODEXE' })
  codexe: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIN' })
  dtfin: Date;

  @Column('varchar', { name: 'OBS', length: 255 })
  obs: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @OneToMany(() => TmiefeEntity, (tmiefeEntity) => tmiefeEntity.codexe)
  tmiefes: TmiefeEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmiexes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToMany(() => TmimetEntity, (tmimetEntity) => tmimetEntity.tmiexes)
  @JoinTable({
    name: 'TMIMXE',
    joinColumns: [{ name: 'CODEXE', referencedColumnName: 'codexe' }],
    inverseJoinColumns: [{ name: 'NUMET', referencedColumnName: 'numet' }],
    schema: 'SANKHYA',
  })
  tmimets: TmimetEntity[];

  @OneToMany(() => TmirmeEntity, (tmirmeEntity) => tmirmeEntity.codexe2)
  tmirmes: TmirmeEntity[];
}
