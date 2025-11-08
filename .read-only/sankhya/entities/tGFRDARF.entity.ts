import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfdctfrecEntity } from './tGFDCTFREC.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFRDARF', ['codreceita'], { unique: true })
@Entity('TGFRDARF', { schema: 'SANKHYA' })
export class TgfrdarfEntity {
  @Column('varchar', { primary: true, name: 'CODRECEITA', length: 10 })
  codreceita: string;

  @Column('varchar', { name: 'DESCRRECEITA', length: 100 })
  descrreceita: string;

  @Column('varchar', { name: 'TIPIMPOSTO', length: 2 })
  tipimposto: string;

  @Column('varchar', { name: 'TIPOPESSOA', length: 1 })
  tipopessoa: string;

  @Column('varchar', { name: 'PERIODICIDADE', length: 1 })
  periodicidade: string;

  @OneToMany(
    () => TgfdctfrecEntity,
    (tgfdctfrecEntity) => tgfdctfrecEntity.codreceita2,
  )
  tgfdctfrecs: TgfdctfrecEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codreceita)
  tgffins: TgffinEntity[];
}
