import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPMON', ['nomeevento', 'nometab', 'nomecoluna', 'tipo'], {
  unique: true,
})
@Entity('TFPMON', { schema: 'SANKHYA' })
export class TfpmonEntity {
  @Column('varchar', { primary: true, name: 'NOMEEVENTO', length: 50 })
  nomeevento: string;

  @Column('varchar', { primary: true, name: 'NOMETAB', length: 50 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'NOMECOLUNA', length: 50 })
  nomecoluna: string;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'M'",
  })
  tipo: string;

  @Column('varchar', { name: 'CAMPOSCHAVE', nullable: true, length: 200 })
  camposchave: string | null;

  @Column('varchar', { name: 'NOMEVIEW', nullable: true, length: 100 })
  nomeview: string | null;

  @Column('varchar', { name: 'NOMEEVEVENTOPAI', nullable: true, length: 100 })
  nomeeveventopai: string | null;

  @Column('char', { name: 'AMBPRODUCAO', length: 1, default: () => "'P'" })
  ambproducao: string;

  @Column('char', { name: 'AMBTESTE', length: 1, default: () => "'L'" })
  ambteste: string;

  @Column('varchar', { name: 'CAMPOCHAVEPAI', nullable: true, length: 50 })
  campochavepai: string | null;
}
