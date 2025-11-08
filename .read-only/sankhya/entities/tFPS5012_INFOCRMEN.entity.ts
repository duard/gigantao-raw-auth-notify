import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5012Entity } from './tFPS5012.entity';

@Index('PK_TFPS5012_INFOCRMEN', ['codinfocrmen'], { unique: true })
@Index('TFPS5012_INFOCRMEN_I01', ['crmen'], {})
@Entity('TFPS5012_INFOCRMEN', { schema: 'SANKHYA' })
export class Tfps5012InfocrmenEntity {
  @Column('int', { primary: true, name: 'CODINFOCRMEN' })
  codinfocrmen: number;

  @Column('varchar', { name: 'CRMEN', nullable: true, length: 6 })
  crmen: string | null;

  @Column('float', { name: 'VRCRMEN', nullable: true, precision: 53 })
  vrcrmen: number | null;

  @Column('float', { name: 'VRCRMENSUSP', nullable: true, precision: 53 })
  vrcrmensusp: number | null;

  @ManyToOne(
    () => Tfps5012Entity,
    (tfps5012Entity) => tfps5012Entity.tfps5012Infocrmen,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODS5012', referencedColumnName: 'cods5012' }])
  cods50: Tfps5012Entity;
}
