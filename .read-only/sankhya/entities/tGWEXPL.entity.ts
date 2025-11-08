import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWEXPL', ['nutarefa', 'sequencia', 'codprod', 'controle'], {
  unique: true,
})
@Entity('TGWEXPL', { schema: 'SANKHYA' })
export class TgwexplEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', { name: 'QUANTIDADE', precision: 53 })
  quantidade: number;

  @Column('int', { name: 'CODENDORIGEM' })
  codendorigem: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwexpls)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
