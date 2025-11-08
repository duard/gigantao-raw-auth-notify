import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSISNK', ['objeto'], { unique: true })
@Entity('TSISNK', { schema: 'SANKHYA' })
export class TsisnkEntity {
  @Column('varchar', { primary: true, name: 'OBJETO', length: 60 })
  objeto: string;

  @Column('varchar', { name: 'RESPONSAVEL', nullable: true, length: 40 })
  responsavel: string | null;

  @Column('datetime', {
    name: 'DHOBJETO',
    nullable: true,
    default: () => 'getdate()',
  })
  dhobjeto: Date | null;
}
