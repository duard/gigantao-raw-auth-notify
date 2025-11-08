import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_CODLOG', ['codlog'], { unique: true })
@Entity('TGFPELLOG', { schema: 'SANKHYA' })
export class TgfpellogEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODLOG' })
  codlog: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DATA' })
  data: Date;

  @Column('char', { name: 'STATUSNFE', length: 1 })
  statusnfe: string;

  @Column('char', { name: 'TPEMIS', length: 1, default: () => '(1)' })
  tpemis: string;

  @Column('varchar', { name: 'CHAVENFE', length: 44 })
  chavenfe: string;

  @Column('int', { name: 'OCORRENCIAS' })
  ocorrencias: number;

  @Column('text', { name: 'DADOSNFE' })
  dadosnfe: string;

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

  @Column('datetime', { name: 'DTCONSULTA', nullable: true })
  dtconsulta: Date | null;

  @Column('char', { name: 'IDENTPROCESSO', length: 1, default: () => "'I'" })
  identprocesso: string;
}
