import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFLCP', ['codparc', 'grupolimcred'], { unique: true })
@Entity('TGFLCP', { schema: 'SANKHYA' })
export class TgflcpEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { primary: true, name: 'GRUPOLIMCRED', length: 20 })
  grupolimcred: string;

  @Column('float', { name: 'LIMCRED', precision: 53 })
  limcred: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflcps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
