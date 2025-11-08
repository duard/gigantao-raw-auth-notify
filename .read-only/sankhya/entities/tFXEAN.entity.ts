import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFXEAN', ['id'], { unique: true })
@Entity('TFXEAN', { schema: 'SANKHYA' })
export class TfxeanEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 6 })
  codvol: string | null;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'VOLUMEPRINCIPAL', nullable: true, length: 1 })
  volumeprincipal: string | null;

  @Column('char', { name: 'DIVIDEMULTIPLICA', nullable: true, length: 1 })
  dividemultiplica: string | null;

  @Column('float', { name: 'QUANTIDADE', nullable: true, precision: 53 })
  quantidade: number | null;

  @Column('int', { name: 'PRODUTONFE', nullable: true })
  produtonfe: number | null;

  @Column('int', { name: 'TIPGTINNFE', nullable: true })
  tipgtinnfe: number | null;

  @Column('char', { name: 'UNIDTRIB', nullable: true, length: 1 })
  unidtrib: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('decimal', {
    name: 'ORIGEMEAN',
    nullable: true,
    precision: 1,
    scale: 0,
  })
  origemean: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('float', { name: 'MULTIPVLR', nullable: true, precision: 53 })
  multipvlr: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;
}
