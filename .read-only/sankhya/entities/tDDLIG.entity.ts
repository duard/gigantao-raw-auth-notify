import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TddlgcEntity } from './tDDLGC.entity';
import { TddinsEntity } from './tDDINS.entity';

@Index('IX_TDDLIG_CONTROLE_EB66A', ['nuinstorig', 'nuinstdest', 'controle'], {})
@Index('IX_TDDLIG_NUINSTDEST_4EF82', ['nuinstdest'], {})
@Index('IX_TDDLIG_NUINSTDEST_CONTROLE_9BF52', ['nuinstdest', 'controle'], {})
@Index('PK_TDDLIG', ['nuinstorig', 'nuinstdest'], { unique: true })
@Entity('TDDLIG', { schema: 'SANKHYA' })
export class TddligEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUINSTORIG',
    precision: 10,
    scale: 0,
  })
  nuinstorig: number;

  @Column('numeric', {
    primary: true,
    name: 'NUINSTDEST',
    precision: 10,
    scale: 0,
  })
  nuinstdest: number;

  @Column('varchar', { name: 'TIPLIGACAO', length: 1, default: () => "'I'" })
  tipligacao: string;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;

  @Column('varchar', { name: 'INSERIR', length: 1, default: () => "'N'" })
  inserir: string;

  @Column('varchar', { name: 'ALTERAR', length: 1, default: () => "'N'" })
  alterar: string;

  @Column('varchar', { name: 'EXCLUIR', length: 1, default: () => "'N'" })
  excluir: string;

  @Column('varchar', {
    name: 'OBRIGATORIA',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  obrigatoria: string | null;

  @Column('text', { name: 'CONDICAO', nullable: true })
  condicao: string | null;

  @Column('char', { name: 'ADICIONAL', nullable: true, length: 1 })
  adicional: string | null;

  @Column('varchar', { name: 'NOMELIGACAO', nullable: true, length: 50 })
  nomeligacao: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @OneToMany(() => TddlgcEntity, (tddlgcEntity) => tddlgcEntity.tddlig)
  tddlgcs: TddlgcEntity[];

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.tddligs)
  @JoinColumn([{ name: 'NUINSTORIG', referencedColumnName: 'nuinstancia' }])
  nuinstorig2: TddinsEntity;

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.tddligs2)
  @JoinColumn([{ name: 'NUINSTDEST', referencedColumnName: 'nuinstancia' }])
  nuinstdest2: TddinsEntity;
}
