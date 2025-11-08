import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmaqEntity } from './tGFMAQ.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFRDF', ['iddoc'], { unique: true })
@Entity('TGFRDF', { schema: 'SANKHYA' })
export class TgfrdfEntity {
  @Column('int', { primary: true, name: 'IDDOC' })
  iddoc: number;

  @Column('int', { name: 'CONTZ', nullable: true })
  contz: number | null;

  @Column('varchar', { name: 'NOMEARQ', nullable: true, length: 80 })
  nomearq: string | null;

  @Column('datetime', { name: 'DTARQUIVO', nullable: true })
  dtarquivo: Date | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('text', { name: 'XMLRECIBO', nullable: true })
  xmlrecibo: string | null;

  @Column('varchar', { name: 'ENVIADO', nullable: true, length: 1 })
  enviado: string | null;

  @ManyToOne(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.tgfrdfs)
  @JoinColumn([{ name: 'CODMAQ', referencedColumnName: 'codmaq' }])
  codmaq: TgfmaqEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfrdfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;
}
