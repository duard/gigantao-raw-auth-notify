import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TGFPELAUX', ['codpel'], { unique: true })
@Index('TGFPELAUX_I01', ['status'], {})
@Index('TGFPELAUX_I02', ['nunota'], {})
@Entity('TGFPELAUX', { schema: 'SANKHYA' })
export class TgfpelauxEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODPEL' })
  codpel: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'STATUS', default: () => '(-1)' })
  status: number;

  @Column('char', { name: 'STATUSNFE', nullable: true, length: 1 })
  statusnfe: string | null;

  @Column('varchar', { name: 'LOTE', nullable: true, length: 44 })
  lote: string | null;

  @Column('char', { name: 'TPEMIS', length: 1, default: () => '(1)' })
  tpemis: string;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('text', { name: 'DADOSNFE', nullable: true })
  dadosnfe: string | null;

  @Column('int', { name: 'OCORRENCIAS', nullable: true })
  ocorrencias: number | null;

  @Column('datetime', { name: 'DHENTREG', nullable: true })
  dhentreg: Date | null;

  @Column('datetime', { name: 'DHSOLICITACAO', nullable: true })
  dhsolicitacao: Date | null;

  @Column('datetime', { name: 'DHRESPOSTA', nullable: true })
  dhresposta: Date | null;

  @Column('varchar', { name: 'MOTCANCEL', nullable: true, length: 180 })
  motcancel: string | null;

  @Column('text', { name: 'MOTERRO', nullable: true })
  moterro: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', { name: 'IDENTPROCESSO', length: 1, default: () => "'I'" })
  identprocesso: string;
}
