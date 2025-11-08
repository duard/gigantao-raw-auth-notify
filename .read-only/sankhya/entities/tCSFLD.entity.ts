import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcsposEntity } from './tCSPOS.entity';
import { TcsqxfEntity } from './tCSQXF.entity';

@Index('PK_TCSFLD', ['codfld'], { unique: true })
@Entity('TCSFLD', { schema: 'SANKHYA' })
export class TcsfldEntity {
  @Column('int', { primary: true, name: 'CODFLD' })
  codfld: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('text', { name: 'FLUXO', nullable: true })
  fluxo: string | null;

  @ManyToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsflds)
  tcsoses: TcsoseEntity[];

  @OneToMany(() => TcsposEntity, (tcsposEntity) => tcsposEntity.codfld)
  tcspos: TcsposEntity[];

  @OneToMany(() => TcsqxfEntity, (tcsqxfEntity) => tcsqxfEntity.codfld2)
  tcsqxfs: TcsqxfEntity[];
}
