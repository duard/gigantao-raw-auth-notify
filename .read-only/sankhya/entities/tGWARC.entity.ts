import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwarsEntity } from './tGWARS.entity';
import { TgweacEntity } from './tGWEAC.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TgwuacEntity } from './tGWUAC.entity';

@Index('PK_TGWARC', ['codareaconf'], { unique: true })
@Entity('TGWARC', { schema: 'SANKHYA' })
export class TgwarcEntity {
  @Column('int', { primary: true, name: 'CODAREACONF' })
  codareaconf: number;

  @Column('varchar', { name: 'NOMEAREACONF', length: 60 })
  nomeareaconf: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'IMPSEP', nullable: true, length: 250 })
  impsep: string | null;

  @OneToMany(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.codareaconf)
  tgwars: TgwarsEntity[];

  @OneToMany(() => TgweacEntity, (tgweacEntity) => tgweacEntity.codareaconf2)
  tgweacs: TgweacEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.codareaconf)
  tgwseps: TgwsepEntity[];

  @OneToMany(() => TgwuacEntity, (tgwuacEntity) => tgwuacEntity.codareaconf2)
  tgwuacs: TgwuacEntity[];
}
