import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFAEC', ['nuplan', 'codparcfat', 'codcontato', 'ocorrencia'], {
  unique: true,
})
@Entity('TGFAEC', { schema: 'SANKHYA' })
export class TgfaecEntity {
  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('int', { primary: true, name: 'CODPARCFAT' })
  codparcfat: number;

  @Column('int', { primary: true, name: 'CODCONTATO' })
  codcontato: number;

  @Column('smallint', { primary: true, name: 'OCORRENCIA' })
  ocorrencia: number;

  @Column('datetime', { name: 'DHOCORRENCIA', default: () => 'getdate()' })
  dhocorrencia: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 500 })
  observacao: string | null;

  @Column('varchar', { name: 'ENTREGUE', length: 1, default: () => "'N'" })
  entregue: string;
}
