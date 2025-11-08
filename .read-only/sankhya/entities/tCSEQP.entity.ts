import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TapeqjEntity } from './tAPEQJ.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcsmeqEntity } from './tCSMEQ.entity';
import { TgfageEntity } from './tGFAGE.entity';

@Index('PK_TCSEQP', ['nuequipe'], { unique: true })
@Entity('TCSEQP', { schema: 'SANKHYA' })
export class TcseqpEntity {
  @Column('int', { primary: true, name: 'NUEQUIPE' })
  nuequipe: number;

  @Column('varchar', { name: 'NOME', length: 50 })
  nome: string;

  @Column('int', { name: 'CODCOORD', nullable: true })
  codcoord: number | null;

  @Column('char', { name: 'TIPOCOORD', nullable: true, length: 1 })
  tipocoord: string | null;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('smallint', { name: 'SUPPARC', nullable: true })
  supparc: number | null;

  @Column('int', { name: 'SUPERVISOR', nullable: true })
  supervisor: number | null;

  @OneToMany(() => TapeqjEntity, (tapeqjEntity) => tapeqjEntity.nuequipe2)
  tapeqjs: TapeqjEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcseqps)
  @JoinColumn([{ name: 'CODEMPFUN', referencedColumnName: 'codemp' }])
  codempfun: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcseqps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TcsmeqEntity, (tcsmeqEntity) => tcsmeqEntity.nuequipe2)
  tcsmeqs: TcsmeqEntity[];

  @OneToMany(() => TgfageEntity, (tgfageEntity) => tgfageEntity.nuequipe2)
  tgfages: TgfageEntity[];
}
