import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIFCM', ['codfcm'], { unique: true })
@Entity('TSIFCM', { schema: 'SANKHYA' })
export class TsifcmEntity {
  @Column('varchar', { primary: true, name: 'CODFCM', length: 256 })
  codfcm: string;

  @Column('datetime', { name: 'DHREGISTRO', nullable: true })
  dhregistro: Date | null;

  @Column('varchar', { name: 'PLATAFORMA', nullable: true, length: 10 })
  plataforma: string | null;

  @Column('varchar', { name: 'CODAPP', nullable: true, length: 100 })
  codapp: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsifcms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
