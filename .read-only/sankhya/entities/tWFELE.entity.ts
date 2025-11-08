import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TwfprnEntity } from './tWFPRN.entity';
import { TwfformEntity } from './tWFFORM.entity';
import { TwfpreEntity } from './tWFPRE.entity';
import { TwfpvtEntity } from './tWFPVT.entity';
import { TwfrfaEntity } from './tWFRFA.entity';
import { TwftnfEntity } from './tWFTNF.entity';
import { TwfvarEntity } from './tWFVAR.entity';

@Index('PK_TWFELE', ['nuele'], { unique: true })
@Index('TWFELE_IDX_001', ['codprn', 'versao', 'idelemento'], {})
@Entity('TWFELE', { schema: 'SANKHYA' })
export class TwfeleEntity {
  @Column('int', { primary: true, name: 'NUELE' })
  nuele: number;

  @Column('int', { name: 'CODPRN' })
  codprn: number;

  @Column('int', { name: 'VERSAO' })
  versao: number;

  @Column('varchar', { name: 'IDELEMENTO', length: 100 })
  idelemento: string;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('varchar', { name: 'TIPO', length: 2 })
  tipo: string;

  @Column('text', { name: 'EXPRESSCANDITADE', nullable: true })
  expresscanditade: string | null;

  @Column('varchar', { name: 'EXPRESSLANGUAGE', nullable: true, length: 50 })
  expresslanguage: string | null;

  @Column('varchar', { name: 'NOTIFICATIONOWNER', nullable: true, length: 2 })
  notificationowner: string | null;

  @Column('varchar', {
    name: 'NOTIFICATIONCANDIDATE',
    nullable: true,
    length: 2,
  })
  notificationcandidate: string | null;

  @Column('varchar', { name: 'BACKGROUND', nullable: true, length: 1 })
  background: string | null;

  @Column('text', { name: 'HISTORYTEMPLATE', nullable: true })
  historytemplate: string | null;

  @Column('text', { name: 'DOCUMENTACAO', nullable: true })
  documentacao: string | null;

  @ManyToOne(() => TwfprnEntity, (twfprnEntity) => twfprnEntity.twfeles)
  @JoinColumn([
    { name: 'CODPRN', referencedColumnName: 'codprn' },
    { name: 'VERSAO', referencedColumnName: 'versao' },
  ])
  twfprn: TwfprnEntity;

  @OneToMany(() => TwfformEntity, (twfformEntity) => twfformEntity.nuele)
  twfforms: TwfformEntity[];

  @OneToMany(() => TwfpreEntity, (twfpreEntity) => twfpreEntity.nuele2)
  twfpres: TwfpreEntity[];

  @OneToOne(() => TwfpvtEntity, (twfpvtEntity) => twfpvtEntity.nuele2)
  twfpvt: TwfpvtEntity;

  @OneToMany(() => TwfrfaEntity, (twfrfaEntity) => twfrfaEntity.nuele2)
  twfrfas: TwfrfaEntity[];

  @OneToMany(() => TwftnfEntity, (twftnfEntity) => twftnfEntity.nuele)
  twftnfs: TwftnfEntity[];

  @OneToMany(() => TwfvarEntity, (twfvarEntity) => twfvarEntity.nuele)
  twfvars: TwfvarEntity[];
}
