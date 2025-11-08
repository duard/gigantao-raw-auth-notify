import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TsismtpEntity } from './tSISMTP.entity';

@Index('PK_TSIMEM', ['codmodelo'], { unique: true })
@Index('TSIMEM_I01', ['codsmtp'], {})
@Entity('TSIMEM', { schema: 'SANKHYA' })
export class TsimemEntity {
  @Column('int', { primary: true, name: 'CODMODELO' })
  codmodelo: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('char', { name: 'TIPO', length: 2 })
  tipo: string;

  @Column('text', { name: 'CONTEUDO' })
  conteudo: string;

  @Column('smallint', { name: 'CODSMTP', nullable: true })
  codsmtp: number | null;

  @Column('varchar', { name: 'ASSUNTO', nullable: true, length: 100 })
  assunto: string | null;

  @Column('varchar', { name: 'RESPONDERPARA', nullable: true, length: 100 })
  responderpara: string | null;

  @Column('int', { name: 'CODUSUREMET', nullable: true })
  codusuremet: number | null;

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codmodemailnfe)
  tgfemps: TgfempEntity[];

  @ManyToOne(() => TsismtpEntity, (tsismtpEntity) => tsismtpEntity.tsimems)
  @JoinColumn([{ name: 'CODSMTP', referencedColumnName: 'codsmtp' }])
  codsmtp2: TsismtpEntity;
}
