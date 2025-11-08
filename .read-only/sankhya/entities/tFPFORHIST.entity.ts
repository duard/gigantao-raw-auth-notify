import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TFPFORHIST', ['codhist'], { unique: true })
@Entity('TFPFORHIST', { schema: 'SANKHYA' })
export class TfpforhistEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODHIST' })
  codhist: number;

  @Column('smallint', { name: 'CODFORM' })
  codform: number;

  @Column('varchar', { name: 'DESCRFORM', length: 255 })
  descrform: string;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @Column('char', { name: 'SANKHYA', length: 1 })
  sankhya: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('text', { name: 'CODFORMIND', nullable: true })
  codformind: string | null;
}
