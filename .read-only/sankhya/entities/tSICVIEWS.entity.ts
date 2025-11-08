import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSICVIEWS', ['nuview'], { unique: true })
@Entity('TSICVIEWS', { schema: 'SANKHYA' })
export class TsicviewsEntity {
  @Column('int', { primary: true, name: 'NUVIEW' })
  nuview: number;

  @Column('varchar', { name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'DESCRICAO', length: 512 })
  descricao: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('text', { name: 'SELECTVIEW', nullable: true })
  selectview: string | null;

  @Column('datetime', { name: 'DHSINC', nullable: true })
  dhsinc: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsicviews)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
