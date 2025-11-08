import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPRUB', ['codnatrubrica'], { unique: true })
@Entity('TFPRUB', { schema: 'SANKHYA' })
export class TfprubEntity {
  @Column('int', { primary: true, name: 'CODNATRUBRICA' })
  codnatrubrica: number;

  @Column('varchar', { name: 'NOMENATRUBRICA', length: 100 })
  nomenatrubrica: string;

  @Column('varchar', { name: 'DESCRNATRUBRICA', length: 250 })
  descrnatrubrica: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DTFIMVALIDADERUB', nullable: true })
  dtfimvalidaderub: Date | null;

  @Column('datetime', { name: 'DTINIVALIDADERUB', nullable: true })
  dtinivalidaderub: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprubs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
