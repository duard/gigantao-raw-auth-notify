import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InfopgtoextEntity } from './tFPS5002_INFOPGTOEXT.entity';

@Index('PK_TFPS5002_ENDEXT', ['cods5002Endext'], { unique: true })
@Entity('TFPS5002_ENDEXT', { schema: 'SANKHYA' })
export class Tfps5002EndextEntity {
  @Column('int', { primary: true, name: 'CODS5002_ENDEXT' })
  cods5002Endext: number;

  @Column('varchar', { name: 'ENDDSCLOGRAD', nullable: true, length: 80 })
  enddsclograd: string | null;

  @Column('varchar', { name: 'ENDNRLOGRAD', nullable: true, length: 10 })
  endnrlograd: string | null;

  @Column('varchar', { name: 'ENDCOMPLEM', nullable: true, length: 30 })
  endcomplem: string | null;

  @Column('varchar', { name: 'ENDBAIRRO', nullable: true, length: 60 })
  endbairro: string | null;

  @Column('varchar', { name: 'ENDCIDADE', nullable: true, length: 40 })
  endcidade: string | null;

  @Column('varchar', { name: 'ENDESTADO', nullable: true, length: 40 })
  endestado: string | null;

  @Column('varchar', { name: 'ENDCODPOSTAL', nullable: true, length: 12 })
  endcodpostal: string | null;

  @Column('varchar', { name: 'TELEF', nullable: true, length: 15 })
  telef: string | null;

  @ManyToOne(
    () => Tfps5002InfopgtoextEntity,
    (tfps5002InfopgtoextEntity) => tfps5002InfopgtoextEntity.tfps5002Endexts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOPGTOEXT',
      referencedColumnName: 'cods5002Infopgtoext',
    },
  ])
  cods5002Infopgtoext: Tfps5002InfopgtoextEntity;
}
