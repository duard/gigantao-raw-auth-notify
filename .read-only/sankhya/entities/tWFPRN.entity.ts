import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TwfeleEntity } from './tWFELE.entity';
import { TwfeveEntity } from './tWFEVE.entity';
import { TwfiprnEntity } from './tWFIPRN.entity';
import { TwfgruEntity } from './tWFGRU.entity';

@Index('PK_TWFPRN', ['codprn', 'versao'], { unique: true })
@Entity('TWFPRN', { schema: 'SANKHYA' })
export class TwfprnEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('int', { primary: true, name: 'VERSAO' })
  versao: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('smallint', { name: 'CODUSUDONO' })
  codusudono: number;

  @Column('datetime', { name: 'DHCRIACAO' })
  dhcriacao: Date;

  @Column('datetime', { name: 'DHPUBLICACAO', nullable: true })
  dhpublicacao: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('text', { name: 'XMLBPMN', nullable: true })
  xmlbpmn: string | null;

  @Column('text', { name: 'IMGBPMN', nullable: true })
  imgbpmn: string | null;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('text', { name: 'DOCUMENTACAO', nullable: true })
  documentacao: string | null;

  @OneToMany(() => TwfeleEntity, (twfeleEntity) => twfeleEntity.twfprn)
  twfeles: TwfeleEntity[];

  @OneToMany(() => TwfeveEntity, (twfeveEntity) => twfeveEntity.twfprn)
  twfeves: TwfeveEntity[];

  @OneToMany(() => TwfiprnEntity, (twfiprnEntity) => twfiprnEntity.twfprn)
  twfiprns: TwfiprnEntity[];

  @ManyToOne(() => TwfgruEntity, (twfgruEntity) => twfgruEntity.twfprns)
  @JoinColumn([{ name: 'NUGRUPO', referencedColumnName: 'nugrupo' }])
  nugrupo: TwfgruEntity;
}
