import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__TC_HITS__CE7F8DD9ACE567D5', ['idlinha'], { unique: true })
@Entity('TC_HITS', { schema: 'SANKHYA' })
export class TcHitsEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IDLINHA' })
  idlinha: string;

  @Column('varchar', { name: 'ENDPOINT', nullable: true, length: 400 })
  endpoint: string | null;

  @Column('varchar', { name: 'SERVICO', nullable: true, length: 400 })
  servico: string | null;

  @Column('varchar', { name: 'ENTIDADE', nullable: true, length: 400 })
  entidade: string | null;

  @Column('smallint', { name: 'TIPOACAO', nullable: true })
  tipoacao: number | null;

  @Column('bigint', { name: 'CODPARC', nullable: true })
  codparc: string | null;

  @Column('varchar', { name: 'APPKEY', nullable: true, length: 100 })
  appkey: string | null;

  @Column('varchar', { name: 'MD5LINHA', nullable: true, length: 32 })
  md5Linha: string | null;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('char', { name: 'INTEGRADO', nullable: true, length: 1 })
  integrado: string | null;

  @Column('float', { name: 'QTD_HITS', nullable: true, precision: 53 })
  qtdHits: number | null;

  @Column('varchar', { name: 'ORIGIN', nullable: true, length: 200 })
  origin: string | null;

  @Column('varchar', { name: 'METHOD', nullable: true, length: 20 })
  method: string | null;

  @Column('varchar', { name: 'CLIENTIPADDRESS', nullable: true, length: 80 })
  clientipaddress: string | null;
}
