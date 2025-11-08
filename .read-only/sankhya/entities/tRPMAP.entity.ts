import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TrptabEntity } from './tRPTAB.entity';

@Index('PK_TRPMAP', ['codmapa'], { unique: true })
@Entity('TRPMAP', { schema: 'SANKHYA' })
export class TrpmapEntity {
  @Column('int', { primary: true, name: 'CODMAPA' })
  codmapa: number;

  @Column('varchar', { name: 'DESCRMAPA', length: 100 })
  descrmapa: string;

  @Column('varchar', { name: 'TABRAIZ', length: 50 })
  tabraiz: string;

  @OneToMany(() => TrptabEntity, (trptabEntity) => trptabEntity.codmapa)
  trptabs: TrptabEntity[];
}
