import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TwfapvtEntity } from './tWFAPVT.entity';
import { TwfeleEntity } from './tWFELE.entity';

@Index('PK_TWFPVT', ['nuele'], { unique: true })
@Entity('TWFPVT', { schema: 'SANKHYA' })
export class TwfpvtEntity {
  @Column('int', { primary: true, name: 'NUELE' })
  nuele: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { name: 'CARGAHORARIA', nullable: true })
  cargahoraria: number | null;

  @Column('varchar', { name: 'TIPOPRAZO', nullable: true, length: 1 })
  tipoprazo: string | null;

  @Column('varchar', { name: 'TIPOTEMPO', nullable: true, length: 1 })
  tipotempo: string | null;

  @Column('float', { name: 'TEMPOFIXO', nullable: true, precision: 53 })
  tempofixo: number | null;

  @Column('text', { name: 'TEMPOVARIAVEL', nullable: true })
  tempovariavel: string | null;

  @Column('varchar', { name: 'TIPOCONTAGEM', nullable: true, length: 1 })
  tipocontagem: string | null;

  @OneToMany(() => TwfapvtEntity, (twfapvtEntity) => twfapvtEntity.nuele2)
  twfapvts: TwfapvtEntity[];

  @OneToOne(() => TwfeleEntity, (twfeleEntity) => twfeleEntity.twfpvt)
  @JoinColumn([{ name: 'NUELE', referencedColumnName: 'nuele' }])
  nuele2: TwfeleEntity;
}
