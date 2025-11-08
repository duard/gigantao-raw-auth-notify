import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmaqEntity } from './tGFMAQ.entity';

@Index('PK_TGFRZF', ['codemp', 'codmaq', 'contz'], { unique: true })
@Entity('TGFRZF', { schema: 'SANKHYA' })
export class TgfrzfEntity {
  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('int', { primary: true, name: 'CONTZ' })
  contz: number;

  @Column('varchar', { name: 'NOMEARQ', nullable: true, length: 80 })
  nomearq: string | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('text', { name: 'XMLRECIBO', nullable: true })
  xmlrecibo: string | null;

  @Column('varchar', { name: 'ENVIADO', nullable: true, length: 1 })
  enviado: string | null;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'PROCESSADO', nullable: true, length: 1 })
  processado: string | null;

  @ManyToOne(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.tgfrzfs)
  @JoinColumn([{ name: 'CODMAQ', referencedColumnName: 'codmaq' }])
  codmaq2: TgfmaqEntity;
}
