import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSINGG__95AA3A637433F5D9', ['nuaviso', 'codfila', 'rotina'], {
  unique: true,
})
@Entity('TSINGG', { schema: 'SANKHYA' })
export class TsinggEntity {
  @Column('int', { primary: true, name: 'NUAVISO' })
  nuaviso: number;

  @Column('int', { primary: true, name: 'CODFILA' })
  codfila: number;

  @Column('varchar', { primary: true, name: 'ROTINA', length: 20 })
  rotina: string;

  @Column('char', { name: 'IGNORARPROXIMAS', nullable: true, length: 1 })
  ignorarproximas: string | null;
}
