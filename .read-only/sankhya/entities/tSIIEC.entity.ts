import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsicarEntity } from './tSICAR.entity';

@Index('PK_TSIIEC', ['codtabela'], { unique: true })
@Entity('TSIIEC', { schema: 'SANKHYA' })
export class TsiiecEntity {
  @Column('int', { primary: true, name: 'CODTABELA' })
  codtabela: number;

  @Column('varchar', { name: 'DESCTABELA', length: 30 })
  desctabela: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'CODPARCRESP', nullable: true })
  codparcresp: number | null;

  @OneToMany(() => TsicarEntity, (tsicarEntity) => tsicarEntity.codtbenv)
  tsicars: TsicarEntity[];

  @OneToMany(() => TsicarEntity, (tsicarEntity) => tsicarEntity.codtbret)
  tsicars2: TsicarEntity[];
}
