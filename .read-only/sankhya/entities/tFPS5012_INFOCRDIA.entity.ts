import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5012Entity } from './tFPS5012.entity';

@Index('PK_TFPS5012_INFOCRDIA', ['codinfocrdia'], { unique: true })
@Index('TFPS5012_INFOCRDIA_I01', ['perapurdia'], {})
@Index('TFPS5012_INFOCRDIA_I02', ['crdia'], {})
@Entity('TFPS5012_INFOCRDIA', { schema: 'SANKHYA' })
export class Tfps5012InfocrdiaEntity {
  @Column('int', { primary: true, name: 'CODINFOCRDIA' })
  codinfocrdia: number;

  @Column('varchar', { name: 'PERAPURDIA', nullable: true, length: 2 })
  perapurdia: string | null;

  @Column('varchar', { name: 'CRDIA', nullable: true, length: 6 })
  crdia: string | null;

  @Column('float', { name: 'VRCRDIA', nullable: true, precision: 53 })
  vrcrdia: number | null;

  @Column('float', { name: 'VRCRDIASUSP', nullable: true, precision: 53 })
  vrcrdiasusp: number | null;

  @ManyToOne(
    () => Tfps5012Entity,
    (tfps5012Entity) => tfps5012Entity.tfps5012Infocrdias,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODS5012', referencedColumnName: 'cods5012' }])
  cods50: Tfps5012Entity;
}
