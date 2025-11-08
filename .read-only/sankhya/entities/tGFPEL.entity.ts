import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TGFPEL', ['codpel'], { unique: true })
@Index('TGFPEL_I01', ['status'], {})
@Index('TGFPEL_I02', ['nunota'], {})
@Index('TGFPEL_I03', ['nunota', 'status', 'statusnfe'], { unique: true })
@Entity('TGFPEL', { schema: 'SANKHYA' })
export class TgfpelEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODPEL' })
  codpel: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'STATUS', default: () => '(-1)' })
  status: number;

  @Column('char', { name: 'STATUSNFE', length: 1 })
  statusnfe: string;

  @Column('varchar', { name: 'LOTE', length: 44 })
  lote: string;

  @Column('char', { name: 'TPEMIS', length: 1, default: () => '(1)' })
  tpemis: string;

  @Column('varchar', { name: 'CHAVENFE', length: 44 })
  chavenfe: string;

  @Column('text', { name: 'DADOSNFE' })
  dadosnfe: string;

  @Column('int', { name: 'OCORRENCIAS' })
  ocorrencias: number;

  @Column('datetime', { name: 'DHENTREG' })
  dhentreg: Date;

  @Column('datetime', { name: 'DHSOLICITACAO' })
  dhsolicitacao: Date;

  @Column('datetime', { name: 'DHRESPOSTA' })
  dhresposta: Date;

  @Column('varchar', { name: 'MOTCANCEL', length: 180 })
  motcancel: string;

  @Column('text', { name: 'MOTERRO', nullable: true })
  moterro: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', { name: 'IDENTPROCESSO', length: 1, default: () => "'I'" })
  identprocesso: string;
}
