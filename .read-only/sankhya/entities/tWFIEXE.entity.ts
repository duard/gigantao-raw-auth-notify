import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfitarEntity } from './tWFITAR.entity';

@Index('PK_TWFIEXE', ['idinstprn', 'idinsttar', 'sequencia'], { unique: true })
@Entity('TWFIEXE', { schema: 'SANKHYA' })
export class TwfiexeEntity {
  @Column('int', { primary: true, name: 'IDINSTPRN' })
  idinstprn: number;

  @Column('int', { primary: true, name: 'IDINSTTAR' })
  idinsttar: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHINICIAL', nullable: true })
  dhinicial: Date | null;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'INTERVALO', nullable: true })
  intervalo: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @ManyToOne(() => TwfitarEntity, (twfitarEntity) => twfitarEntity.twfiexes)
  @JoinColumn([
    { name: 'IDINSTPRN', referencedColumnName: 'idinstprn' },
    { name: 'IDINSTTAR', referencedColumnName: 'idinsttar' },
  ])
  twfitar: TwfitarEntity;
}
