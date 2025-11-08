import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimldtEntity } from './tIMLDT.entity';
import { TimrcvEntity } from './tIMRCV.entity';

@Index('PK_TIMRET', ['retcodigo'], { unique: true })
@Entity('TIMRET', { schema: 'SANKHYA' })
export class TimretEntity {
  @Column('int', { primary: true, name: 'RETCODIGO' })
  retcodigo: number;

  @Column('char', { name: 'RETESTAGIO', length: 2, default: () => "'CA'" })
  retestagio: string;

  @Column('datetime', { name: 'RETDTREAJUSTE', nullable: true })
  retdtreajuste: Date | null;

  @Column('datetime', { name: 'RETDTCADASTRO', default: () => 'getdate()' })
  retdtcadastro: Date;

  @Column('int', { name: 'RETDTUSUINCLIU', nullable: true })
  retdtusuincliu: number | null;

  @Column('int', { name: 'RETDTUSUALTEROU', nullable: true })
  retdtusualterou: number | null;

  @Column('datetime', { name: 'RETSTART', nullable: true })
  retstart: Date | null;

  @Column('datetime', { name: 'RETSTOP', nullable: true })
  retstop: Date | null;

  @Column('varchar', { name: 'RETDETALHES', nullable: true, length: 500 })
  retdetalhes: string | null;

  @Column('char', { name: 'RETLEGADO', nullable: true, length: 1 })
  retlegado: string | null;

  @OneToMany(() => TimldtEntity, (timldtEntity) => timldtEntity.ldtreajuste)
  timldts: TimldtEntity[];

  @OneToMany(() => TimrcvEntity, (timrcvEntity) => timrcvEntity.rcvreajuste2)
  timrcvs: TimrcvEntity[];
}
