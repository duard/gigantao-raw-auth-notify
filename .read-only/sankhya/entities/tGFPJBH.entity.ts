import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPJBH', ['idunico', 'sitregbol', 'dtalt', 'motivo'], {
  unique: true,
})
@Entity('TGFPJBH', { schema: 'SANKHYA' })
export class TgfpjbhEntity {
  @Column('int', { primary: true, name: 'IDUNICO' })
  idunico: number;

  @Column('varchar', { primary: true, name: 'SITREGBOL', length: 2 })
  sitregbol: string;

  @Column('datetime', { primary: true, name: 'DTALT' })
  dtalt: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { primary: true, name: 'MOTIVO', length: 250 })
  motivo: string;
}
