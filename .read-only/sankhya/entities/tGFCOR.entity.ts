import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCOR', ['nupostagem', 'dtemissao'], { unique: true })
@Entity('TGFCOR', { schema: 'SANKHYA' })
export class TgfcorEntity {
  @Column('varchar', { primary: true, name: 'NUPOSTAGEM', length: 11 })
  nupostagem: string;

  @Column('datetime', { primary: true, name: 'DTEMISSAO' })
  dtemissao: Date;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('datetime', { name: 'DTOCORRENCIA', nullable: true })
  dtocorrencia: Date | null;

  @Column('varchar', { name: 'NOMERECEBEDOR', nullable: true, length: 40 })
  nomerecebedor: string | null;

  @Column('smallint', { name: 'CODSTATUS', nullable: true })
  codstatus: number | null;

  @Column('varchar', { name: 'DESCRSTATUS', nullable: true, length: 40 })
  descrstatus: string | null;

  @Column('varchar', { name: 'COMENTARIOS', nullable: true, length: 150 })
  comentarios: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;
}
