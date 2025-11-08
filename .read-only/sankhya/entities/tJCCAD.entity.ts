import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TjcediEntity } from './tJCEDI.entity';
import { TjcpapEntity } from './tJCPAP.entity';
import { TjcpedEntity } from './tJCPED.entity';
import { TjctabEntity } from './tJCTAB.entity';

@Index('PK_TJCCAD', ['codcaderno'], { unique: true })
@Entity('TJCCAD', { schema: 'SANKHYA' })
export class TjccadEntity {
  @Column('int', { primary: true, name: 'CODCADERNO' })
  codcaderno: number;

  @Column('char', { name: 'DESCRCADERNO', length: 30 })
  descrcaderno: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('int', { name: 'CODCADERNOPAI', nullable: true })
  codcadernopai: number | null;

  @Column('float', { name: 'TAMPAG', nullable: true, precision: 53 })
  tampag: number | null;

  @OneToMany(() => TjcediEntity, (tjcediEntity) => tjcediEntity.codcaderno2)
  tjcedis: TjcediEntity[];

  @OneToMany(() => TjcediEntity, (tjcediEntity) => tjcediEntity.codcad2)
  tjcedis2: TjcediEntity[];

  @OneToMany(() => TjcpapEntity, (tjcpapEntity) => tjcpapEntity.codcaderno2)
  tjcpaps: TjcpapEntity[];

  @OneToMany(() => TjcpedEntity, (tjcpedEntity) => tjcpedEntity.codcaderno2)
  tjcpeds: TjcpedEntity[];

  @OneToMany(() => TjcpedEntity, (tjcpedEntity) => tjcpedEntity.codcad2)
  tjcpeds2: TjcpedEntity[];

  @OneToMany(() => TjctabEntity, (tjctabEntity) => tjctabEntity.codcaderno2)
  tjctabs: TjctabEntity[];
}
