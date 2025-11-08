import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSEFP', ['nunota'], { unique: true })
@Entity('TCSEFP', { schema: 'SANKHYA' })
export class TcsefpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'OBS', nullable: true, length: 512 })
  obs: string | null;

  @Column('varchar', {
    name: 'ACEITACOMPL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  aceitacompl: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsefps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
