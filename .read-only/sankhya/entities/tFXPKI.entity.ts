import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFXPKI', ['id'], { unique: true })
@Entity('TFXPKI', { schema: 'SANKHYA' })
export class TfxpkiEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'CODPRODUTO' })
  codproduto: number;

  @Column('int', { name: 'MATERIAPRIMA' })
  materiaprima: number;

  @Column('float', { name: 'QTDMISTURA', precision: 53 })
  qtdmistura: number;

  @Column('varchar', { name: 'CODVOLUME', nullable: true, length: 2 })
  codvolume: string | null;

  @Column('float', { name: 'PRECO', nullable: true, precision: 53 })
  preco: number | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
