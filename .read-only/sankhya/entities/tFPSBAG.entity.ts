import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

@Index('PK_TFPSBAG', ['codgrupo'], { unique: true })
@Entity('TFPSBAG', { schema: 'SANKHYA' })
export class TfpsbagEntity {
  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('smallint', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('varchar', { name: 'REPETICAO', nullable: true, length: 1 })
  repeticao: string | null;

  @Column('varchar', { name: 'TERMINO', nullable: true, length: 1 })
  termino: string | null;

  @Column('varchar', { name: 'COMPARECER', nullable: true, length: 1 })
  comparecer: string | null;

  @Column('datetime', { name: 'DATAFIM', nullable: true })
  datafim: Date | null;

  @Column('smallint', { name: 'QTDAPOS', nullable: true })
  qtdapos: number | null;

  @Column('varchar', { name: 'SEMANA', nullable: true, length: 13 })
  semana: string | null;

  @OneToOne(() => TfpsbagEntity, (tfpsbagEntity) => tfpsbagEntity.tfpsbag)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo2: TfpsbagEntity;

  @OneToOne(() => TfpsbagEntity, (tfpsbagEntity) => tfpsbagEntity.codgrupo2)
  tfpsbag: TfpsbagEntity;
}
