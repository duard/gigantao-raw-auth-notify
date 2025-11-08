import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPCBP', ['codmotfimbeneficio'], { unique: true })
@Entity('TFPCBP', { schema: 'SANKHYA' })
export class TfpcbpEntity {
  @Column('int', { primary: true, name: 'CODMOTFIMBENEFICIO' })
  codmotfimbeneficio: number;

  @Column('varchar', { name: 'DESCRMOTFIMBENEFICIO', length: 250 })
  descrmotfimbeneficio: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcbps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
