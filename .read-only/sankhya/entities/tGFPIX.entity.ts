import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfpixtefEntity } from './tGFPIXTEF.entity';

@Index('PK_TGFPIX', ['seqpix'], { unique: true })
@Entity('TGFPIX', { schema: 'SANKHYA' })
export class TgfpixEntity {
  @Column('int', { primary: true, name: 'SEQPIX' })
  seqpix: number;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('varchar', { name: 'IDTRANSACAO', nullable: true, length: 254 })
  idtransacao: string | null;

  @Column('float', { name: 'VLRTRANSACAO', nullable: true, precision: 53 })
  vlrtransacao: number | null;

  @Column('datetime', { name: 'DTTRANSACAO', nullable: true })
  dttransacao: Date | null;

  @Column('varchar', { name: 'CHAVERECEBEDOR', nullable: true, length: 254 })
  chaverecebedor: string | null;

  @Column('varchar', { name: 'NOMEPAGADOR', nullable: true, length: 254 })
  nomepagador: string | null;

  @Column('varchar', { name: 'CPFCNPJPAGADOR', nullable: true, length: 20 })
  cpfcnpjpagador: string | null;

  @Column('text', { name: 'DADOSCOBRANCA', nullable: true })
  dadoscobranca: string | null;

  @Column('text', { name: 'DADOSPAGAMENTO', nullable: true })
  dadospagamento: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 50 })
  status: string | null;

  @Column('varchar', { name: 'TIPOPIX', nullable: true, length: 1 })
  tipopix: string | null;

  @Column('varchar', { name: 'NSU', nullable: true, length: 50 })
  nsu: string | null;

  @Column('char', { name: 'ORIGEM', nullable: true, length: 1 })
  origem: string | null;

  @OneToMany(() => TgfpixtefEntity, (tgfpixtefEntity) => tgfpixtefEntity.seqpix)
  tgfpixtefs: TgfpixtefEntity[];
}
