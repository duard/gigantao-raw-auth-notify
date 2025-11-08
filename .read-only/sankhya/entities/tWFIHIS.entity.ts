import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfiprnEntity } from './tWFIPRN.entity';

@Index('PK_TWFIHIS', ['idinstprn', 'idinstele', 'sequencia'], { unique: true })
@Entity('TWFIHIS', { schema: 'SANKHYA' })
export class TwfihisEntity {
  @Column('int', { primary: true, name: 'IDINSTPRN' })
  idinstprn: number;

  @Column('int', { primary: true, name: 'IDINSTELE' })
  idinstele: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'IDELEMENTO', length: 100 })
  idelemento: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('datetime', { name: 'DHEXECUCAO', nullable: true })
  dhexecucao: Date | null;

  @Column('int', { name: 'TEMPOEXECUCAO', nullable: true })
  tempoexecucao: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 100 })
  status: string | null;

  @Column('varchar', { name: 'RESUMO', nullable: true, length: 3103 })
  resumo: string | null;

  @ManyToOne(() => TwfiprnEntity, (twfiprnEntity) => twfiprnEntity.twfihis)
  @JoinColumn([{ name: 'IDINSTPRN', referencedColumnName: 'idinstprn' }])
  idinstprn2: TwfiprnEntity;
}
