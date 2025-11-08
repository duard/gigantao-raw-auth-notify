import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGMSLO', ['codmeta', 'codsolicitante', 'nusolicitacao'], {
  unique: true,
})
@Entity('TGMSLO', { schema: 'SANKHYA' })
export class TgmsloEntity {
  @Column('int', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('int', { primary: true, name: 'CODSOLICITANTE' })
  codsolicitante: number;

  @Column('int', { primary: true, name: 'NUSOLICITACAO' })
  nusolicitacao: number;

  @Column('datetime', { name: 'DHSOLICITACAO' })
  dhsolicitacao: Date;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('int', { name: 'CODAPROVADOR', nullable: true })
  codaprovador: number | null;

  @Column('datetime', { name: 'DHAPROVACAO', nullable: true })
  dhaprovacao: Date | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;
}
