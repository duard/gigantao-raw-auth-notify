import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TWUSU', ['codparc', 'usuario'], { unique: true })
@Entity('TWUSU', { schema: 'SANKHYA' })
export class TwusuEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { primary: true, name: 'USUARIO', length: 10 })
  usuario: string;

  @Column('char', { name: 'SENHA', nullable: true, length: 10 })
  senha: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.twusus)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
