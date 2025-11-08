import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('AK_CODPROF_TFPPFS', ['codprof'], { unique: true })
@Index('PK_TFPPFS', ['inscrorg', 'tiporg'], { unique: true })
@Entity('TFPPFS', { schema: 'SANKHYA' })
export class TfppfsEntity {
  @Column('smallint', { name: 'CODPROF' })
  codprof: number;

  @Column('varchar', { name: 'NOMEPROF', length: 100 })
  nomeprof: string;

  @Column('varchar', { name: 'ESPECIALIDADE', length: 100 })
  especialidade: string;

  @Column('varchar', { name: 'TELEFONE', length: 13 })
  telefone: string;

  @Column('varchar', { primary: true, name: 'INSCRORG', length: 10 })
  inscrorg: string;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'NIS', nullable: true, length: 11 })
  nis: string | null;

  @Column('smallint', { name: 'CODUF' })
  coduf: number;

  @Column('smallint', { primary: true, name: 'TIPORG' })
  tiporg: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
