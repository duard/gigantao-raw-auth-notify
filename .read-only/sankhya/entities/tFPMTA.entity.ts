import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPMTA', ['codmotafast'], { unique: true })
@Entity('TFPMTA', { schema: 'SANKHYA' })
export class TfpmtaEntity {
  @Column('varchar', { primary: true, name: 'CODMOTAFAST', length: 2 })
  codmotafast: string;

  @Column('varchar', { name: 'DESCRMOTAFAST', length: 250 })
  descrmotafast: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DTFIMVALIDADE', nullable: true })
  dtfimvalidade: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmtas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
