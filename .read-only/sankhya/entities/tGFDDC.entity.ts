import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfrpcEntity } from './tGFRPC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgffacEntity } from './tGFFAC.entity';

@Index('PK_TGFDDC', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFDDC', { schema: 'SANKHYA' })
export class TgfddcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 40 })
  nome: string | null;

  @Column('float', { name: 'COMPRIMENTO', nullable: true, precision: 53 })
  comprimento: number | null;

  @Column('float', {
    name: 'COMPRIMENTOORELHA1',
    nullable: true,
    precision: 53,
  })
  comprimentoorelha1: number | null;

  @Column('float', {
    name: 'COMPRIMENTOORELHA2',
    nullable: true,
    precision: 53,
  })
  comprimentoorelha2: number | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'DIAMETROEXT', nullable: true, precision: 53 })
  diametroext: number | null;

  @Column('float', { name: 'DIAMETROINT', nullable: true, precision: 53 })
  diametroint: number | null;

  @Column('float', { name: 'DIAMETROCINTA', nullable: true, precision: 53 })
  diametrocinta: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'NOMEELEMENTO', nullable: true, length: 50 })
  nomeelemento: string | null;

  @Column('varchar', { name: 'UNIDADE', length: 2, default: () => "'MM'" })
  unidade: string;

  @Column('image', { name: 'DESENHO', nullable: true })
  desenho: Buffer | null;

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfddc)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfrpcEntity, (tgfrpcEntity) => tgfrpcEntity.tgfddcs)
  @JoinColumn([{ name: 'CODPECA', referencedColumnName: 'codpeca' }])
  codpeca: TgfrpcEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfddcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @OneToMany(() => TgffacEntity, (tgffacEntity) => tgffacEntity.tgfddc)
  tgffacs: TgffacEntity[];
}
