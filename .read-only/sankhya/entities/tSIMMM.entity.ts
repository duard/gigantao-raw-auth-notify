import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsimmtEntity } from './tSIMMT.entity';
import { TsiterEntity } from './tSITER.entity';

@Index('PK_TSIMMM', ['codmarca'], { unique: true })
@Entity('TSIMMM', { schema: 'SANKHYA' })
export class TsimmmEntity {
  @Column('int', { primary: true, name: 'CODMARCA' })
  codmarca: number;

  @Column('varchar', { name: 'MARCA', length: 30 })
  marca: string;

  @Column('varchar', { name: 'MODELO', length: 30 })
  modelo: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'QTDTECLAS', nullable: true, default: () => '(0)' })
  qtdteclas: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsimmms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TsimmtEntity, (tsimmtEntity) => tsimmtEntity.codmarca2)
  tsimmts: TsimmtEntity[];

  @OneToMany(() => TsiterEntity, (tsiterEntity) => tsiterEntity.codmarca)
  tsiters: TsiterEntity[];
}
