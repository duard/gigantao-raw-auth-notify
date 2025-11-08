import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TapeapEntity } from './tAPEAP.entity';
import { TcseqpEntity } from './tCSEQP.entity';
import { TfpfcoEntity } from './tFPFCO.entity';

@Index('PK_TCSMEQ', ['nuequipe', 'sequencia'], { unique: true })
@Entity('TCSMEQ', { schema: 'SANKHYA' })
export class TcsmeqEntity {
  @Column('int', { primary: true, name: 'NUEQUIPE' })
  nuequipe: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODMEMBRO' })
  codmembro: number;

  @Column('char', { name: 'TIPOMEMBRO', length: 1 })
  tipomembro: string;

  @Column('datetime', { name: 'INICIOPARTICIPA' })
  inicioparticipa: Date;

  @Column('datetime', { name: 'FINALPARTICIPA', nullable: true })
  finalparticipa: Date | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'NOME', length: 50 })
  nome: string;

  @Column('smallint', { name: 'CODEMPFUN', nullable: true })
  codempfun: number | null;

  @Column('int', { name: 'MATRICULA', nullable: true })
  matricula: number | null;

  @Column('varchar', { name: 'EMPREGADO', nullable: true, length: 40 })
  empregado: string | null;

  @OneToMany(() => TapeapEntity, (tapeapEntity) => tapeapEntity.tcsmeq)
  tapeaps: TapeapEntity[];

  @ManyToOne(() => TcseqpEntity, (tcseqpEntity) => tcseqpEntity.tcsmeqs)
  @JoinColumn([{ name: 'NUEQUIPE', referencedColumnName: 'nuequipe' }])
  nuequipe2: TcseqpEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tcsmeqs)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;
}
